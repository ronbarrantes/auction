'use client'

import { Button } from "@/components/ui/button";

export const ButtonComponent = () => {
  "use client"

  return (
    <Button onClick={() => {
      alert("This is the settings")
    }}>
      Click this button
    </Button>
  )
}

