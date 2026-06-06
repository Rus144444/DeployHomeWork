import { Users } from "../UsersProject/Users/Users"
import { ProductList } from "../ProductProject/ProductList/ProductList"
import { TrackList } from "../Track/TaskList/TrackList"
import { TrackDetail } from "../Track/TackDetail/TrackDetail"
import { Game } from "../GameElephan/Game/Game"
import css from "./App.module.css"
import { useTracks } from "../../BLL/useTracks"
import { useProduct } from "../../BLL/useProducts"

  
export function App() {
  const { tracks, selectedTrackId,selectedTrack, clickSetSelectedTrackId } = useTracks()
  const isSelected = selectedTrack(tracks, selectedTrackId)
  // ======================================================
  const {products} = useProduct()
  // ======================================================
  

  
 
  return (
    <div>
      <div className={css.wrapperGame}>
        <Game/>
      </div>
      <div className={css.background}></div>
  {/* {============================================} */}
      <div className={css.trackListWrapper}>
        <h1>Product task</h1>
        <ProductList items={products}/>
      </div>
      <div className={css.background}></div>
  {/* {============================================} */}
      <div className={css.trackListWrapper} >
        <Users/>
      </div>
      <div className={css.background}></div>
  {/* {============================================} */}  
      <div className={css.trackListWrapper}>
        <button onClick={clickSetSelectedTrackId}>Next</button>
        <hr />
        <TrackList tracks={tracks} />
        <hr />
        <TrackDetail track={isSelected} /> 
      </div>
    </div>
  )
}