'use client'
import React, { useState } from 'react'
import * as Form from '@radix-ui/react-form'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = {
      email,
      subject,
      message,
    }
    try {
      const response = await fetch('/api/form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return (
    <Form.Root
      className="w-full max-w-xl flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <Form.Field className="grid mb-[10px]" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-slate-300">
            Email
          </Form.Label>
          <Form.Message
            className="text-[13px] text-slate-300"
            match="valueMissing"
          >
            Please enter your email
          </Form.Message>
          <Form.Message
            className="text-[13px] text-slate-300"
            match="typeMismatch"
          >
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border bg-slate-700 w-full inline-flex h-[45px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-slate-300 outline-none"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@company.com"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="subject">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-slate-300">
            Subject
          </Form.Label>
          <Form.Message
            className="text-[13px] text-slate-300 opacity-[0.8]"
            match="valueMissing"
          >
            Please enter a subject
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border bg-slate-700 h-[45px] w-full inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-slate-300 outline-none"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Share your idea with me!"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="message">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-slate-300">
            Your Message
          </Form.Label>
          <Form.Message
            className="text-[13px] text-slate-300 opacity-[0.8]"
            match="valueMissing"
          >
            Please enter a message
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea
            className="box-border bg-slate-700 h-[100px] w-full inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-slate-300 outline-none"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Control>
      </Form.Field>
      <div className="flex justify-start">
        <Form.Submit asChild>
          <button className="text-slate-300 border border-[#8de8ff] rounded-md px-4 py-3 hover:bg-[#8de8ff] hover:text-slate-700 transition-all ease-out">
            Submit Message
          </button>
        </Form.Submit>
      </div>
    </Form.Root>
  )
}

export default ContactForm
