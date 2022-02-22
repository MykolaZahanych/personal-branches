export default function LearningList({ items }) {
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
