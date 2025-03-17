import { type NextRequest, NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import { join } from "path"
import { v4 as uuidv4 } from "uuid"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const rep = formData.get("rep") as string
    const customer = formData.get("customer") as string
    const date = formData.get("date") as string

    if (!file || !rep || !customer || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a production environment, you would upload to a cloud storage service
    // like AWS S3, Google Cloud Storage, or Azure Blob Storage
    // This is a simplified example for local development

    const callId = uuidv4()
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create a directory for uploads if it doesn't exist
    const uploadDir = join(process.cwd(), "uploads")
    try {
      await writeFile(join(uploadDir, `${callId}.${file.name.split(".").pop()}`), buffer)
    } catch (error) {
      console.error("Error writing file:", error)
      // If directory doesn't exist, create it and try again
      const { mkdir } = require("fs/promises")
      await mkdir(uploadDir, { recursive: true })
      await writeFile(join(uploadDir, `${callId}.${file.name.split(".").pop()}`), buffer)
    }

    // In a real application, you would store metadata in a database
    // and return a URL to the uploaded file

    // Mock duration calculation (in a real app, you'd extract this from the file)
    const duration =
      "00:" +
      Math.floor(Math.random() * 30 + 10) +
      ":" +
      Math.floor(Math.random() * 60)
        .toString()
        .padStart(2, "0")

    // For this example, we'll return a mock URL
    const audioUrl = `/uploads/${callId}.${file.name.split(".").pop()}`

    return NextResponse.json({
      callId,
      audioUrl,
      duration,
      message: "File uploaded successfully",
    })
  } catch (error) {
    console.error("Error handling upload:", error)
    return NextResponse.json({ error: "Error uploading file" }, { status: 500 })
  }
}

