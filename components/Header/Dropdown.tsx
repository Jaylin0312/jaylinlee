export default function Dropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="text-white flex flex-col h-screen w-full"
    >
      <div className="px-7 py-4 bg-slate-900 border-t bg border-t-slate-600">Skills</div>
      <div className="px-7 py-4 bg-slate-900 border-t border-t-slate-600">Experience</div>
      <div className="px-7 py-4 bg-slate-900 border-t border-t-slate-600">Project</div>
      <div className="px-7 py-4 bg-slate-900 border-t border-t-slate-600">Contacts</div>
    </div>
  )
}

