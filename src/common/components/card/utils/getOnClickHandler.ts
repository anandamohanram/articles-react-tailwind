/**
 * getOnClickHandler - returns the clickhandler that opens the given link
 *
 * @param {string} link - url to open on click
 * @return {*}  {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void}
 */
 export const getOnClickHandler =
 (link: string): React.MouseEventHandler<HTMLButtonElement> =>
 (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
   e.preventDefault();
   window.location.href = link;
 };