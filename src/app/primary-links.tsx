import SparkleButton from './sparkle-button'

const PrimaryLinks = () => {
  return (
    <div className='flex items-center justify-center gap-6'>
      <SparkleButton className='mb-6'>
        <a
          href='chitraksh.vercel.app'
          target='_blank'
          className={SparkleButton.ClassName}
          rel='noopener, noreferrer'
        >
          <SparkleButton.Spark />
          <SparkleButton.Backdrop />
          <SparkleButton.Text>Website</SparkleButton.Text>
        </a>
      </SparkleButton>

      <SparkleButton className='mb-6'>
        <a href='mailto:chitraksh2705@gmail.com' className={SparkleButton.ClassName}>
          <SparkleButton.Spark />
          <SparkleButton.Backdrop />
          <SparkleButton.Text>chitraksh2705@gmail.com</SparkleButton.Text>
        </a>
      </SparkleButton>
    </div>
  )
}

export default PrimaryLinks
