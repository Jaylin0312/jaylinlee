import Image from 'next/image'
import { Project } from '../../../config/types'

export default function Card({ detail }: { detail: Project }) {
  const link = detail.linkUrl?.realSite ? detail.linkUrl?.realSite : detail.linkUrl?.github;
  return (
    <div className="group">
      <a href={link} target="_blank">
        <div className="rounded-xl max-w-[300px] min-h-[380px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full p-4 3xl:p-[18px] bg-[#18315b] duration-500 ease-in-out group-hover:translate-y-[-0.5rem]">
          <div className="h-full w-full">
            <div className="relative w-full">
              <Image
                className="min-w-[200px] min-h-[200px] object-cover rounded-md opacity-60 group-hover:opacity-100 transition-opacity"
                src={detail.coverImageUrl}
                alt="Big Red Dot"
                loading="lazy"
                width={300}
                height={200}
              />
            </div>
            <div className="text-slate-100 flex flex-col">
              <div className="my-3 flex items-center justify-between">
                <div className="text-md font-bold text-slate-100 group-hover:text-[#8de8ff]">
                  {detail.title}
                </div>
                <div className="text-sm font-bold bg-blue-100 text-slate-600 px-2 py-0.5 rounded">
                  {detail.year}
                </div>
              </div>
              <div className="text-sm text-slate-300">{detail.summary}</div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
