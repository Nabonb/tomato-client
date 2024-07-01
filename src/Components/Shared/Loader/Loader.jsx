import { SyncLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className='
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
    >
      <SyncLoader size={25} color='tomato' />
    </div>
  )
}

export default Loader