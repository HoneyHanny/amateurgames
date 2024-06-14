import Link from 'next/link'

import { Button } from '@nextui-org/button'
import { Spacer } from '@nextui-org/spacer'
import { title, subtitle } from '@/components/primitives'

export default function AboutPage() {
  return (
    <div>
      <div>
        <h1 className={title()}>Discover hundreds of free to play games</h1>
        <Spacer y={20} />
        <h1 className={subtitle()}>This site was crafted by Hans Duran to master NextUI library and NextJS Framework.</h1>
      </div>
      <div className='mt-60 flex flex-col gap-20'>
        <Link href='/'>
          <Button variant='shadow' color='primary' className='w-40'>
            Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
