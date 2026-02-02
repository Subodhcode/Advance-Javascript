import React from 'react'

export default function Btncomp({text}) {
    return (
        <div>
            <button className="bg-[red] p-[10px_25px] text-[20px] text-[white]">
                {text}
            </button>
        </div>
    )
}
