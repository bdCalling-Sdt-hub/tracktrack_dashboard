import TextArea from "antd/es/input/TextArea"
import { useState } from "react"

const ReplayModal = () => {
    //  replay value states
    const [value, setValue] = useState('')
    return (
        <div className="bg-[var(--black-600)] p-4 rounded-md">
            <p className="text-2xl text-[var(--gray-600)]">Feedback Replay</p>
            <p className="text-lg text-[var(--gray-600)] my-1">Feedback form: Jullu Jalal</p>
            <p className="text-base text-[var(--gray-600)] p-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure </p>
            <p className="text-lg text-[var(--gray-600)] mb-1">Your Reply :</p>
            <TextArea
                style={{
                    resize: 'none',
                    height: '200px'
                }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div className="center-center mt-3">
                <button style={{
                    justifyContent: 'center',
                    width: '100px'
                }} className="sidebar-button-orange">
                    Send
                </button>
            </div>
        </div>
    )
}

export default ReplayModal
