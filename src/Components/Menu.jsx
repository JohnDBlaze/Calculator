import React from 'react';

const tweet    = 'I just found a beautiful web-based calculator made with '
               + 'React! You should try it! '
               + 'https://github.com/JohnDBlaze/Calculator \n\n';
const tweetURL = 'https://twitter.com/intent/tweet?'
                  + 'hashtags=calculator,calculator,webdesign'
                    + 'Coders,Dev,React,Javascript'
                  + '&via=Abhilashfr88'
                  + '&related=freecodecamp&text=' +
                  encodeURIComponent( tweet );

const Menu = props => {
  return (
    <div className={props.showMenu ? 'menu hide' : 'menu'}>
      <small className="goBack" onClick={() => props.toggleMenu()}>
        {'◄ back to business'}
      </small>
      <section>
        <h6>Let your friends know</h6>
        <p>Hi,</p>
        <p>
          If you think this <strong>calculator</strong> thing is worth it,
          please{' '}
          <a
            className="item"
            href={tweetURL}
            rel="noopener noreferrer"
            target="_blank"
            alt="Tweet to your friends"
            title="Tweet to your friends"
            tabIndex="-1"
          >
            spread the word on Twitter
          </a>{' '}
          and let your friends know!
        </p>
        <p>Of course, any feedback is more than welcome.</p>
        <p>Thanks for your time,</p>
        <p>
          <a
            href="https://twitter.com/Abhilashfr88"
            target="_blank"
            rel="noopener noreferrer"
            alt="about Abhilash Francis"
            title="about Abhilash Francis"
            tabIndex="-1"
          >
            Abhilash Francis
          </a>
        </p>
      </section>
    </div>
  );
};

export default Menu;
