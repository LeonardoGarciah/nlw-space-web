import { User } from 'lucide-react'
import { getUser } from '../../lib/auth'
import Image from 'next/image'

const Profile = () => {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        className="h-10 w-10 rounded-full"
        src={avatarUrl}
        alt=""
        width={40}
        height={40}
      />
      <p className="max-w-[140px] text-sm leading-snug">
        {name}{' '}
        <a className="block text-red-400 hover:text-red-300" href="#">
          Quero sair
        </a>{' '}
      </p>
    </div>
  )
}

export default Profile
