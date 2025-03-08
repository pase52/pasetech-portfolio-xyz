import Image from 'next/image'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import { Button } from '@/components/ui/button'

type SiteLogoProps = {
  kind: 'logo' | 'darklogo' | 'tlogolight' | 'tlogodark' | 'tlogogrey'
  logoType?: 'image' | 'link' | 'button' | 'text'
  size?: number
  className?: string
  parentClassName?: string
  buttonClassName?: string
  href?: string | undefined
  target?: '_blank' | '_self' | '_parent' | '_top'
  variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost'
}

const SiteLogo = ({
  kind,
  href = '/',
  size = 12.5,
  logoType = 'link',
  className,
  parentClassName,
  buttonClassName,
  target = '_self',
  variant,
}: SiteLogoProps) => {
  const pxWidth = size ? size * 4 : 0
  const pxHeight = size ? size * 4 : 0

  // Helper function to determine text size class based on size prop
  const getTextSizeClass = (size: number) => {
    if (size <= 8) return 'text-sm'
    if (size <= 10) return 'text-base'
    if (size <= 12) return 'text-lg'
    if (size <= 15) return 'text-xl'
    if (size <= 20) return 'text-2xl'
    if (size <= 25) return 'text-3xl'
    if (size <= 30) return 'text-4xl'
    if (size <= 40) return 'text-5xl'
    if (size <= 50) return 'text-6xl'
    return 'text-7xl'
  }

  const logoMap = {
    logo: '/static/site/logo.png',
    darklogo: '/static/site/logo-d.svg',
    tlogolight: '/static/site/logo-tw.svg',
    tlogodark: '/static/site/logo-tb.svg',
    tlogogrey: '/static/site/logo-tg.svg',
  }

  const imagePath = logoMap[kind] || '/logo.svg'

  if (logoType === 'button') {
    return (
      <Button variant={variant} size="icon" className={buttonClassName}>
        <Link
          href={href}
          className={parentClassName}
          aria-label={siteMetadata.headerTitle}
          target={target}
        >
          <div className="flex items-center justify-between">
            <Image
              src={imagePath}
              alt={'PaseTech'}
              width={`${pxWidth}`}
              height={`${pxHeight}`}
              title={'PaseTech'}
              priority={true} // {false} | {true}
              className={cn('drop-shadow-lg filter', className)}
            />
          </div>
        </Link>
      </Button>
    )
  }

  if (logoType === 'link' && href) {
    return (
      <Link
        href={href}
        className={parentClassName}
        aria-label={siteMetadata.headerTitle}
        target={target}
      >
        <div className="flex items-center justify-between">
          <Image
            src={imagePath}
            alt={'Andrew Sam'}
            width={`${pxWidth}`}
            height={`${pxHeight}`}
            title={'Andrew Sam'}
            priority={true} // {false} | {true}
            className={cn('drop-shadow-lg filter', className)}
          />
        </div>
      </Link>
    )
  }
  if (logoType === 'image') {
    return (
      <Image
        src={imagePath}
        alt={'PaseTech'}
        width={`${pxWidth}`}
        height={`${pxHeight}`}
        title={'PaseTech'}
        priority={true} // {false} | {true}
        className={cn('drop-shadow-lg filter', className)}
      />
    )
  }

  if (logoType === 'text') {
    const textContent = (
      <div className={cn('font-bold', getTextSizeClass(size), className)}>
        Pase<span className="text-primary"> | </span>Tech
      </div>
    )

    return href ? (
      <Link
        href={href}
        className={parentClassName}
        aria-label={siteMetadata.headerTitle}
        target={target}
      >
        {textContent}
      </Link>
    ) : (
      textContent
    )
  }
}

export default SiteLogo
