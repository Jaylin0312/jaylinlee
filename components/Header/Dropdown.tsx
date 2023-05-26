export default function Dropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="bg-[#102A43] text-white flex flex-col h-screen"
    >
      <div className="px-10 py-4 border-t border-t-slate-600">Skills</div>
      <div className="px-10 py-4 border-t border-t-slate-600">Experience</div>
      <div className="px-10 py-4 border-t border-t-slate-600">Project</div>
      <div className="px-10 py-4 border-t border-t-slate-600">Contacts</div>
    </div>
  )
}

