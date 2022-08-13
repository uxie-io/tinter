import { h } from 'preact'
import MountainImage from '../../assets/mountain.webp'

const AbstractArt = () => (
  <div className="block mx-auto mt-8 mb-4">
    <style>
      {`
#carbonads {
  position: relative;
  display: block;
  overflow: hidden;
  background-color: rgba(245, 245, 245, 0.1);
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

#carbonads > span {
  position: relative;
  display: block;
}

#carbonads a {
  text-decoration: none;
}

.carbon-wrap {
  display: flex;
  align-items: center;

}

.carbon-img {
  display: block;
  margin: 0;
  line-height: 1;
}

.carbon-img img {
  display: block;
}

.carbon-text {
  position: relative;
  display: flex;
  margin-bottom: 12px;
  padding: 8px 1em;
  max-width: 500px;
  text-align: left;
  font-size: 14px;
  line-height: 1.4;
  color: #ffffffaa;
  align-items: center;
}

.carbon-text:hover {
  color: #fff;
}

.carbon-text:after {
  display: table;
  margin-left: 20px;
  padding: 12px 16px;
  border-radius: 3px;
  background-color: hsla(0, 0%, 34.90196078431372%, 0.327);
  color: #fff;
  content: "Learn More";
  white-space: nowrap;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
}

.carbon-poweredby {
  position: absolute;
  bottom: 0;
  left: 146px;
  color: #999 !important;
  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: .5px;
  font-weight: 500;
  font-size: 10px;
}

@media only screen and (min-width: 320px) and (max-width: 759px) {
  .carbon-text:after {
    display: none;
  }
}    
@media only screen and (min-width: 1024px) and (max-width: 1200px) {
  #carbonads {
    margin-left: 3rem;
  }
} 
      `}
    </style>
    <img src={MountainImage} className="max-w-full" alt="" />
    <script
      async
      type="text/javascript"
      src="//cdn.carbonads.com/carbon.js?serve=CEAIP53W&placement=tinteruxieio"
      id="_carbonads_js"
    />
  </div>
)

export default AbstractArt
