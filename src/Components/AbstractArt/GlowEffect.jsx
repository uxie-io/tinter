import { h } from 'preact'

const GlowEffect = () => {
  return (
    <div
      className=""
      style={{
        position: 'absolute',
        backgroundColor: '#000',
        color: '#fff',
        padding: '100px 0',
        textAlign: 'left',
        overflow: 'hidden',
        top: '0',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        className="absolute abstract w-36 h-36 z-1"
        style={{
          right: '-375px',
          top: '50%',
          marginTop: '-200px',
          position: 'absolute',
          filter: 'blur(100px)',
          transform: 'rotate(90deg)',
          height: '400px',
          width: '400px',
          background: 'linear-gradient(90deg,#f36 0,#f90 100%)',
        }}
      />

      <div
        className="absolute abstract w-36 h-36 z-1"
        style={{
          left: '-100px',
          bottom: '-100px',
          marginTop: '-200px',
          position: 'absolute',
          filter: 'blur(100px)',
          transform: 'rotate(90deg)',
          height: '200px',
          width: '200px',
          background: 'linear-gradient(90deg,#f36 0,#f90 100%)',
        }}
      />
    </div>
  )
}

export default GlowEffect
