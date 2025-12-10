import './App.css';
import videos from './data/videos';
import PCBIcon from './components/PCBIcon';

function App() {
  const displayedVideos = videos.map(video => {
      return (
        <div key={video.filename} className="video-card">
          <h2>{video.title}</h2>

          <div className="video-wrapper">
            <video controls>
              <source
                src={`./videos/${video.path}`}
                type="video/mp4"
              />
              Browser-ul tau nu suporta video-ul.
            </video>
          </div>
 
          <div className="video-info">
            <p>File: <code>{video.title}</code></p>
            <a href={`/videos/${video.path}`} download={`${video.filename}`} className="download-btn">⬇ Download</a>
          </div>
        </div>
      )});

  return (
    <div className="app">
      <header>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <PCBIcon size={50} color="#3498db" />
        </div>

        <h1>Electronics Videos</h1>
        <p>A list of my electronics projects.</p>
      </header>

      <main>
        <div className="videos-container">
          {displayedVideos}
        </div>
      </main>

      <footer>
        <p>Total videos: {videos.length}</p>
      </footer>
    </div>
  );
}

export default App;
