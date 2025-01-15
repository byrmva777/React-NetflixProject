const GenreItems = ({genres}) => {

  return (
    <div className='flex gap-2 mb-5'>
    {genres?.map(item => <div className='bg-zinc-600  text-zinc-300 text-sm p-1 rounded-md'>{item.name}</div> )}
    </div>
  )
}

export default GenreItems