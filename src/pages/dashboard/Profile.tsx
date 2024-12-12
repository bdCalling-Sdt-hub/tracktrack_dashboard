import { useState } from "react"
import { FaEdit } from "react-icons/fa"
import ProfileEdit from "../../components/ProfilePage/ProfileEdit"
import ChangePassword from "../../components/ProfilePage/ChangePassword"

const Tabs = ['Edit Profile', 'Change Password']
const Profile = () => {
    // tabs states
    const [tab, setTab] = useState(Tabs?.[0])
    // image states
    const [image, setImage] = useState<File | null>(null)
    return (
        <>
            {/* profile images */}
            <div className="max-w-[700px] mx-auto bg-[var(--black-200)] p-4 rounded-md">
                <div className="w-full center-center">
                    <div className="w-24 h-24 rounded-full relative" >
                        <img className="w-full h-full object-cover rounded-full" src={image ? URL.createObjectURL(image) : 'https://placehold.co/400'} alt="" />
                        <FaEdit size={24} className="absolute right-0 bottom-2 text-[var(--white-600)]" />
                    </div>
                </div>
                <p className="text-2xl text-center text-[var(--white-600)] mt-2">shaharul siyam</p>
            </div>
            {/* password and profile toggle button*/}
            <div className="w-full center-center my-3">
                {
                    Tabs?.map((item: string) => <button
                        style={{
                            width: '200px',
                            justifyContent: 'center'
                        }}
                        className={`${item === tab ? ' sidebar-button-orange' : 'sidebar-button-black'}`}
                        onClick={() => setTab(item)}
                    >{item}</button>)
                }
            </div>
            {/* profile update form and password update form */}
            <div className="max-w-[700px] mx-auto bg-[var(--black-200)] p-4 rounded-md">
                {
                    tab == 'Edit Profile' ? <ProfileEdit /> : <ChangePassword />
                }
            </div>
        </>
    )
}

export default Profile
