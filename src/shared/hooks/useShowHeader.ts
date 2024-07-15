import { useEffect, useState } from 'react'

export function useShowHeader() {
  const [showHeader, setShowHeader] = useState(true)
  const [scrollData, setScrollData] = useState({
    y: 0,
    lastY: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prev) => ({
        y: window.scrollY,
        lastY: prev.y,
      }))
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const isScrollingUp = scrollData.y < scrollData.lastY
    const shouldShowHeader = isScrollingUp || scrollData.y < 100

    setShowHeader(shouldShowHeader)
  }, [scrollData])

  return showHeader
}
