"use client"

import { MessageCircle } from "lucide-react"
import { ContactQrButton } from "@/components/contact/contact-qr-button"

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-5 z-40 hidden sm:block">
      <ContactQrButton className="h-auto rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-xl shadow-primary/25 hover:bg-primary/90">
        <MessageCircle className="size-4" />
        客服咨询
      </ContactQrButton>
    </div>
  )
}
