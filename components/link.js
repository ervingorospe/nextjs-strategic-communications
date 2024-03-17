import { useState, useEffect } from 'react'
import Link from 'next/link'
import _ from 'lodash'
import { formatRouteName } from 'lib/route-name'
import { getItem } from 'api/collections'

export default function LinkComponent({ details, classStyle }) {
  const [routeName, setRouteName] = useState("/")
  const name = _.get(details, 'fields.nav.text') || details.name
  const target = _.get(details, 'fields.nav.target') ? `_${_.get(details, 'fields.nav.target')}` : ""

  useEffect(() => {
    const getPageLink = async () => {
      const { items } = await getItem(details.fields.pageLink)
      const data = items[0]
      setRouteName(_.get(data, 'fields.nav.text') || (_.get(data, 'fields.slug') || formatRouteName(data.name)))
    }

    if (details.fields.pageLink) {
      getPageLink()
    } else {
      const route = details.fields.slug || formatRouteName(details.name)
      setRouteName(_.get(details, 'fields.nav.url') || route)
    }
  }, [details, details.fields.pageLink])


  return (
    <Link href={routeName}>
      <a target={target} className={classStyle}>
        {name}
      </a>
    </Link>
  );
}