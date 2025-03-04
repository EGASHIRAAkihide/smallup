'use client'
import { toast } from 'sonner';

export function ClientComponent() {
  const onShowToast = () => {
    toast("toast showed")
  }

  return (
    <button type="button" onClick={onShowToast}>show toast</button>
  )
}