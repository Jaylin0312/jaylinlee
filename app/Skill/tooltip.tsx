'use client'
import React, { useState } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import ProgrammingIcons from '@/svg/programming/utils'
import { Skillset } from '../../config/types'

interface TooltipPopupProps {
  skill: Skillset
}

const TooltipPopup: React.FC<TooltipPopupProps> = ({ skill }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger
          asChild
          className="transition-all duration-300 ease-in-out cursor-pointer"
        >
          <div
            className="inline-flex items-center justify-center rounded-full outline-none"
            onClick={handleClick}
          >
            <ProgrammingIcons name={skill.icon} width={40} height={40} />
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[12px] py-[8px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
            sideOffset={5}
          >
            {skill.text}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default TooltipPopup
