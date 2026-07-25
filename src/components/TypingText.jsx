'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Typewriter text effect.
 *
 * - `text`: a single string to type out once and stop (cursor keeps blinking).
 * - `phrases`: an array of strings to type, hold, delete, and cycle through
 *   forever. Takes priority over `text` if both are given.
 *
 * Respects prefers-reduced-motion — shows the final text immediately with
 * no animation for users who've asked for reduced motion.
 */
export default function TypingText({
  text,
  phrases,
  as: Tag = 'span',
  className = '',
  typingSpeed = 45,
  deletingSpeed = 25,
  holdMs = 1800,
  startDelay = 300,
  loop = true,
  showCursor = true,
}) {
  const list = phrases && phrases.length > 0 ? phrases : text ? [text] : ['']
  const cycles = loop ? phrases && phrases.length > 0 : false

  const [display, setDisplay] = useState('')
  const [reducedMotion, setReducedMotion] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(list[list.length - 1] || '')
      return
    }

    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let stopped = false

    function tick() {
      if (stopped) return
      const current = list[phraseIndex] || ''

      if (!deleting) {
        charIndex += 1
        setDisplay(current.slice(0, charIndex))

        if (charIndex >= current.length) {
          const isLastPhrase = phraseIndex === list.length - 1
          if (!cycles && isLastPhrase) return // stop for good, cursor keeps blinking via CSS
          deleting = true
          timeoutRef.current = setTimeout(tick, holdMs)
          return
        }
        timeoutRef.current = setTimeout(tick, typingSpeed)
      } else {
        charIndex -= 1
        setDisplay(current.slice(0, charIndex))

        if (charIndex <= 0) {
          deleting = false
          phraseIndex = (phraseIndex + 1) % list.length
          timeoutRef.current = setTimeout(tick, typingSpeed)
          return
        }
        timeoutRef.current = setTimeout(tick, deletingSpeed)
      }
    }

    timeoutRef.current = setTimeout(tick, startDelay)

    return () => {
      stopped = true
      clearTimeout(timeoutRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion])

  return (
    <Tag className={className}>
      {display}
      {showCursor && (
        <span className="inline-block w-[2px] sm:w-[3px] h-[1em] align-middle ml-1 bg-current animate-[blink_1s_step-start_infinite]" />
      )}
      <style jsx global>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </Tag>
  )
}
