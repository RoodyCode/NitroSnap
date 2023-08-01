import { MinusIcon, XIcon } from 'lucide-react'
import { Button } from './ui/button'

const TitleBar = () => (
  <div className="absolute w-full flex justify-end p-5">
    <Button variant={'ghost'} size={'icon'}>
      <MinusIcon />
    </Button>
    <Button variant={'ghost'} size={'icon'}>
      <XIcon />
    </Button>
  </div>
)

export default TitleBar
