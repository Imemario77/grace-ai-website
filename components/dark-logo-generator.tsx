"use client"

import { useEffect, useRef } from "react"

// This component is used to generate the dark mode logo
// It's not meant to be rendered in the UI
export function DarkLogoGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = "/images/logo-light.png"

    img.onload = () => {
      // Set canvas dimensions to match the image
      canvas.width = img.width
      canvas.height = img.height

      // Draw the original image
      ctx.drawImage(img, 0, 0)

      // Get the image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // Invert the colors for the text and SM mark (black to white)
      for (let i = 0; i < data.length; i += 4) {
        // Check if the pixel is black or near black (text or SM mark)
        if (data[i] < 50 && data[i + 1] < 50 && data[i + 2] < 50) {
          // Invert to white
          data[i] = 255 // R
          data[i + 1] = 255 // G
          data[i + 2] = 255 // B
        }
        // Keep the amber/orange color as is
      }

      // Put the modified image data back on the canvas
      ctx.putImageData(imageData, 0, 0)

      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const a = document.createElement("a")
          a.href = url
          a.download = "logo-dark.png"
          a.click()
          URL.revokeObjectURL(url)
        }
      })
    }
  }, [])

  return <canvas ref={canvasRef} style={{ display: "none" }} />
}
