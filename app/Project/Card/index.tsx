import Image from 'next/image'
import { Project } from '../../../config/types'

export default function Card({detail}: {detail: Project}) {
  return (
    <div>
      <div className="rounded-[20px] max-w-[320px] min-h-[400px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full p-4 3xl:p-[18px] bg-[#18315b]">
        <div className="h-full w-full">
          <div className="relative w-full">
            <Image
              className="min-w-[200px] min-h-[200px] object-cover"
              src={detail.coverImageUrl}
              alt="Big Red Dot"
              width={300}
              height={200}
            />
          </div>
          <div className="text-white flex flex-col">
            <div className="my-3 flex items-center justify-between">
              <div className="text-lg font-bold text-navy-700">
                {detail.title}
              </div>
              <div className="text-sm font-bold text-navy-700">2021</div>
            </div>
            <div className='text-base'>{detail.summary}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
