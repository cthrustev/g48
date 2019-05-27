import React from 'react';

import './landing.css';

class End extends React.Component {
  render() {
    return (
      <div>
        <div class="c-content c-content--text">
          <h2 class="c-content__title">How much more do men earn than women in Estonia?</h2>
          <p class="answer">You’re answer was <strong class="text-red">incorrect</strong>.<br/>Men earn 25% more than women in Estonia.</p>
          <p class="small">
            <strong>Did you know?</strong><br/>
            EU marks every year the Equal Pay Day, which falls on 3rd November. It marks the moment when women symbolically stop
            getting paid compared to their male colleagues, with 16% of the working year remaining. In Estonia, Equal Pay day would
            be 30th of September.
          </p>
          <p class="small">      
            <strong>Wish to learn more?</strong><br/>
            Statistics related to gender pay gap can be found on the <a href="http://pub.stat.ee/px-web.2001/Database/Rahvastik/databasetree.asp">database of Statistics Estonia</a>.
          </p>
          <p class="small">      
            Additional information related to gender pay gap can be found on <a href="http://europa.eu/rapid/press-release_STATEMENT-18-6184_en.htm">European Comission webpage</a>.
          </p>
        </div>
      </div>
    )
  }
};

export default End;