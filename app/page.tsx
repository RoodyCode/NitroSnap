'use client'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import BoostConfig from '@/components/BoostConfig'
import { useBoostStore } from '@/lib/store'
import { Fragment } from 'react'
import { Loader2, Rocket } from 'lucide-react'

export default function Home() {
  const { toast } = useToast()
  const [boosting, setBoosting] = useBoostStore(state => [
    state.boosting,
    state.setBoosting
  ])

  const boostHandler = async () => {
    setBoosting('started')
    setTimeout(() => {
      toast({
        title: 'Performance boosted!',
        type: 'background',
        duration: 2500
      })
      setBoosting('finished')
    }, 2000)
  }

  return (
    <Fragment>
      <BoostConfig />

      <div>
        <Button
          disabled={boosting === 'started'}
          onClick={() => boostHandler()}
          size={'lg'}
        >
          {boosting !== 'started' ? (
            <Rocket className="mr-2 h-4 w-4" />
          ) : (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Boost
        </Button>
      </div>
    </Fragment>
  )
}
