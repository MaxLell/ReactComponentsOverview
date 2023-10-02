import Link from './Link';

function Sidebar() {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Several ugly Buttons', path: '/button' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
  ];

  const renderedLinks = links.map((linkObject) => {
    return (
      <Link
        key={linkObject.label}
        to={linkObject.path}
        className="mb-3"
        activClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {linkObject.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}
export default Sidebar;
