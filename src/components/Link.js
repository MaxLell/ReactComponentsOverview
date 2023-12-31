import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames';

function Link({ to, children, className, activClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500 ',
    className,
    currentPath === to && activClassName
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}
export default Link;
