import React, {Fragment} from 'react';

function ShowBanner() {
  return (
    <Fragment>
     <div className='container mt-3'>
      <h5>Welcome to My Aplication</h5>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Student Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">E-mail</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div> 
    
//     let menuRef = useRef();

	///////// click outside close dropdown menu
// 	useEffect(() => {
// 		document.addEventListener("mousedown", (event) => {
// 			if (menuRef.current && !menuRef.current.contains(event.target)) {
// 				setTopDropdown("");
// 				// setNotifi("");
// 			}
// 		});
// 	});
    </Fragment>
  );
}

export default ShowBanner;
