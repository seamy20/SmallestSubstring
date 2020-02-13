import React from 'react';
import {
  MDBNavbar, MDBCol, MDBBtn, MDBContainer,  MDBRow,
} from 'mdbreact';

//Brute For Example. -- Better method within SmallestSubstring.js
class BruteForce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showsubstringLength:false
    };
    this.shortestValue = 0;
  }

  onClick() {
    this.setState({
    });
  }


  shortestSubstring() {
    var s  = document.getElementById('stringPattern').value.toLowerCase();   
    var pat = s.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).sort().join('');
    //ignore spacing
    pat = pat.replace(' ','')
    var n = s.length; 


     /*
    Explore all left boundaries for windows. AT EACH planting of
    a left boundary, explore all right boundaries.
    This is how we explore all windows of substrings we can take.
  */
  for (var left = 0; left < n; left++) {
    for (var right = left; right < n; right++) {

      /*
        Take the snippet that will give us the window we want to
        investigate. Do 'right + 1' since .substring excludes upper
        index, so basically we get a snippet from index 'left' ro 'right'
      */
      var windowSnippet = searchString.substring(left, right + 1);

      /*
        Test the window
      */
      var windowContainsAllChars = stringContainsAllCharacters(windowSnippet, t);

      /*
        If it satisfies and is smaller than the 'minWindowLengthSeenSoFar', update the
        'minWindowLengthSeenSoFar' and the minWindow string
      */
      if (windowContainsAllChars && windowSnippet.length() < minWindowLengthSeenSoFar) {
        minWindowLengthSeenSoFar = windowSnippet.length();
        minWindow = windowSnippet;
      }

    }

  }
}



render() {  
    return (
      <div>
        <header>
          <MDBNavbar id="custom-nav">
              <div class="col-md-12" >
                <p className="display-7  text-uppercase mt-3 title">Shortest Substring</p>
                </div>
          </MDBNavbar>

          {/* Page Content */}
          <MDBContainer fluid>
            <MDBRow className="">
              <MDBCol size="12" className="full-img">
                <div class="mt-5 d-flex justify-content-center">
                  <p class="lead text-center dark-grey-text mb-3 display-7 initial-complaint-title orange-underline">
                  </p>
                </div>
                <div class="d-flex justify-content-center">
                  <p class="lead text-center grey-text mb-4">
                    Enter a string below to find the shortest substring
                  </p>
                </div>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol size="12" className="full-img">           
                <div class="row no-padding mt-5 mb-5">
                  <div class="col-md-3"></div>

                  {/* Card */}
                  <div class="col-md-6">
                    <div class="card">
                      {/*  Card content */}
                      <div class="card-body">
                                            {/* String Pattern*/}                                            
                                            <div class="col-md-12" className="fullDivWidth mb-3">
                                                <div class="md-form" >
                                                    <i class="fas fa-signature prefix blue-text"></i>
                                                    <input id="stringPattern" class="form-control" type="text" placeholder="*Enter String Pattern" pattern="^[_a-z A-Z]{3,}" required/>
                                                </div>
                                            </div>


                        {/*  Button */}
                        <div class="d-flex justify-content-center mt-4 mb-4">
                        <MDBBtn onClick={()=>this.shortestSubstring()}   type="button" class="btn btn-blue" disable>Check Shortest Substring</MDBBtn>
                        </div>
                        {
                            this.state.showsubstringLength?
                                <div>
                                        <p className="display-7 text-center text-uppercase">The Shortest Substring is</p>
                                        <hr className="divider" />
                                        <p className="display-7 text-center text-uppercase result">{this.shortestValue}</p>
                                </div>
                            :null
                        }


                      </div>
                    </div>
                  </div>
                <div class="col-md-6"></div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </header>
    </div>
  );
  }
}
export default BruteForce;
