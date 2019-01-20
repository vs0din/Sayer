import React from 'react';
import './CommentsList.css';
import Comment from '../Comment/Comment'


const CommentsList = (props) => {

  return (
      <div className={'CommentsList row'}>
          <Comment
              commentIconPath={'http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Man-16-icon.png'}
              commentText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique
                  luctus enim, sed elementum neque venenatis in. Nullam lobortis ex a lectus blandit malesuada. Nam ac
                  felis id dolor pharetra rutrum. Cras vitae fermentum ex. Vivamus aliquam egestas orci, sed porttitor
                  nisi malesuada rutrum.`}
          />
          <Comment
              commentIconPath={'http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Boss-5-icon.png'}
              commentText={`Maecenas eu sagittis tellus. Nam facilisis felis quis tellus eleifend congue.
                  Aliquam feugiat velit leo, vitae faucibus arcu eleifend a. Proin in odio erat. Pellentesque vel justo
                  malesuada ante pulvinar malesuada a quis lorem. Donec magna dui, egestas eu tincidunt vel, lacinia
                  cursus nibh. Integer non nulla eget diam varius rhoncus nec at tellus. Nam porttitor condimentum diam,
                  eu porta mauris finibus eget.`}
          />
          <Comment
              commentIconPath={'http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Woman-9-icon.png'}
              commentText={`Suspendisse at erat tincidunt nunc euismod lobortis et et urna. Ut nulla tellus,
                  eleifend vitae ultrices nec, fringilla et ex. Integer a odio eu velit dignissim ullamcorper. Praesent
                  nec laoreet turpis, ut efficitur felis. Donec sodales sit amet tellus nec dictum. Donec quis
                  sollicitudin nisi. Vivamus risus ex, rutrum eu venenatis id, egestas eu mi. Aliquam massa ligula,
                  scelerisque vel nisl non, venenatis fringilla dui. Suspendisse vitae tincidunt mi. Morbi congue, tellus
                  in fermentum ornare, elit justo ultrices lorem, eget bibendum nunc enim a lorem. Cras hendrerit non
                  ipsum non fermentum. Nunc bibendum turpis mauris, vitae malesuada lorem posuere in. Mauris congue purus
                  nulla, non pharetra lectus venenatis at. Fusce ultricies lobortis purus eu gravida. Proin pellentesque
                  nec ante eget euismod. Nullam ultrices quis nisi sit amet porttitor.`}
          />
      </div>
  )
}

export default CommentsList