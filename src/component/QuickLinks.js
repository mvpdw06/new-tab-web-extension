import React, { PureComponent } from 'react'

import quickLinksConfig from 'Config/quickLinksConfig'
import urlProvider from 'Config/urlProvider'
import imageProvider from 'Config/imageProvider'

const QuickLinks = () =>
  <ul>
    {quickLinksConfig.map(quickLink =>
      <li key={quickLink}>
        <a
          href="javascript:void(0)"
          title={quickLink}
          onClick={() => {
            const url = urlProvider(quickLink)

            if (url) window.location.href = url
          }}
        >
          <img className="quickIcon" src={imageProvider(quickLink)} />
        </a>
      </li>
    )}
  </ul>

module.exports = QuickLinks
