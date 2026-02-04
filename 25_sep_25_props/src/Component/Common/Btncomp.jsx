import React from 'react'

export default function Btncomp({p}) {
    return (
        <div>
            <button className="bg-[red] p-[10px_25px] text-[20px] text-[white] border rounded-[20px] cursor-pointer ">
                {p}
            </button>
        </div>
    )
}
