import Image from 'next/image'
import Link from 'next/link'

import { Chip } from '@nextui-org/chip'
import { Button } from '@nextui-org/button'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'

import { title } from '@/components/primitives'
import { getGames } from '@/utils/game-utils'

const Home = async () => {
  const games = await getGames()

  return (
    <div className='flex flex-col items-center justify-center gap-32 mt-16 no-scrollbar'>
      <section className='flex flex-row flex-wrap gap-8 justify-center no-scrollbar'>
        <h1 className={title()}>Discover a plethora of free to play games</h1>
      </section>
      <section className='flex flex-row flex-wrap gap-8 justify-center no-scrollbar'>
        {games.map((game: any) => (
          <Card isBlurred key={game.id} className='w-80 h-110 transition-transform transform hover:scale-105'>
            <CardHeader>{game.title}</CardHeader>
            <CardBody className='py-2 no-scrollbar'>
              <Image alt='Thumbnail' src={game.thumbnail} width={300} height={100} className='object-cover rounded-xl' />
              <text className='text-ellipsis pt-2'>{game.short_description}</text>
            </CardBody>
            <CardFooter>
              <Link href={game.game_url}>
                <Button color='primary' variant='shadow'>
                  Visit
                </Button>
              </Link>
              <div className='absolute right-4 flex gap-4'>
                <Chip variant='flat' color='secondary' size='md'>
                  {game.genre}
                </Chip>
                <Chip variant='flat' color='primary' size='md'>
                  Free
                </Chip>
              </div>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  )
}

export default Home
