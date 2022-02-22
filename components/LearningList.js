export default function LearningList({ items }) {
  if (items.length === 0) {
    return (
      <div className='h-28 border-2 border-black rounded flex justify-center items-center'>
        <h2>Coming soon...</h2>
      </div>
    );
  }
  return (
    <>
      {items.map((item) => (
        <div className='learning-item' key={item.id}>
          <div className='name'>{item.name}</div>
          <div className='description'>{item.description}</div>
          <div className='link'>
            <a
              className='cursor-pointer mb-4 py-2 px-6 rounded text-white bg-violet-700'
              href={item.link}
              target={'_blank'}
              rel={'noreferrer'}
            >
              {item.label}
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
