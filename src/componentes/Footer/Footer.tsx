import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  

  return (
    <>
        <div className="flex justify-center bg-gradient-to-r from-[#02123E] via-[#06315E] to-[#02123E]">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl-1 font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#ff0090] to-[#ffa1e9]'>Blog da May  | Copyright: </p>
            <p className='text-lg-1 text-white'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer