import { useEffect, useState } from 'react';
import _ from 'lodash'
import Link from 'next/link'
import { getItem } from 'api/collections'
import { formatRouteName } from 'lib/route-name'

export default function Button({ classStyle, btnName, btnLink, icon, btnUrl, btnTarget }) {
  const [linkSlug, setLinkSlug] = useState("/")

  useEffect(() => {
    const fetchItems = async () => {
      const { items } = await getItem(btnLink)
      setLinkSlug(_.get(items[0], 'fields.slug') || formatRouteName(_.get(items[0], 'name')))
    }

    if (btnUrl) {
      setLinkSlug(btnUrl)
    } else {
      if (btnLink) {
        fetchItems()
      }
    }
  }, [btnLink, btnUrl])

  return (
    <Link href={linkSlug} key={btnName}>
      <a target={btnTarget} className={classStyle}>
        <span>{btnName}</span> 
        {
          icon && (
            <span className={icon.classStyle}>
              <i className={icon.type}></i>
            </span>
          )
        }
      </a>
    </Link>
  );
}