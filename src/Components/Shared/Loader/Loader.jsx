import { SyncLoader } from 'react-spinners'

const Loader = ({size =25}) => {
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
      <SyncLoader size={size} color='tomato' />
    </div>
  )
}

export default Loader