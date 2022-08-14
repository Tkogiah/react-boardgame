import { Player } from "./Player";

export default function Board() {
    return (   
        <div id="hexboard">
            <div id="85" class="hex">85</div>
            <div id="86" class="hex">86</div>
            <div id="87" class="hex">87</div>
            <div id="88" class="hex">88</div>
            <div id="89" class="hex">89</div>
            <div id="90" class="hex">90</div>
            <br/>
            <div id="84" class="hex">84</div>
            <div id="56" class="hex">56</div>
            <div id="57" class="hex">57</div>
            <div id="58" class="hex">58</div>
            <div id="59" class="hex">59</div>
            <div id="60" class="hex">60</div>
            <div id="61" class="hex">61</div>
            <br/>
            <div id="83" class="hex">83</div>
            <div id="55" class="hex">55</div>
            <div id="33" class="hex">33</div>
            <div id="34" class="hex">34</div>
            <div id="35" class="hex">35</div>
            <div id="36" class="hex">36</div>
            <div id="37" class="hex">37</div>
            <div id="62" class="hex">62</div>
            <br/>
            <div id="82" class="hex">82</div>
            <div id="54" class="hex">54</div>
            <div id="32" class="hex">32</div>
            <div id="16" class="hex">16</div>
            <div id="17" class="hex">17</div>
            <div id="18" class="hex">18</div>
            <div id="19" class="hex">19</div>
            <div id="38" class="hex">38</div>
            <div id="63" class="hex">63</div>
            <br/>
            <div id="81" class="hex">81</div>
            <div id="53" class="hex">53</div>
            <div id="31" class="hex">31</div>
            <div id="15" class="hex">15</div>
            <div id="5" class="hex">5</div>
            <div id="6" class="hex">6</div>
            <div id="7" class="hex">7</div>
            <div id="20" class="hex">20</div>
            <div id="39" class="hex">39</div>
            <div id="64" class="hex">64</div>
            <br/>
            <div id="80" class="hex">80</div>
            <div id="52" class="hex">52</div>
            <div id="30" class="hex">30</div>
            <div id="14" class="hex">14</div>
            <div id="4" class="hex">4</div>
            <div id="0" class="hex">0</div>
            <div id="1" class="hex">1</div>
            <div id="8" class="hex">8</div>
            <div id="21" class="hex">21</div>
            <div id="40" class="hex">40</div>
            <div id="65" class="hex">65</div>
            <br/>
            <div id="79" class="hex">79</div>
            <div id="51" class="hex">51</div>
            <div id="29" class="hex">29</div>
            <div id="13" class="hex">13</div>
            <div id="3" class="hex">3</div>
            <div id="2" class="hex">2</div>
            <div id="9" class="hex">9</div>
            <div id="22" class="hex">22</div>
            <div id="41" class="hex">41</div>
            <div id="66" class="hex">66</div>
            <br/>
            <div id="78" class="hex ">78</div>
            <div id="50" class="hex">50</div>
            <div id="28" class="hex">28</div>
            <div id="12" class="hex">12</div>
            <div id="11" class="hex">11</div>
            <div id="10" class="hex">10</div>
            <div id="23" class="hex">23</div>
            <div id="42" class="hex">42</div>
            <div id="67" class="hex">67</div>
            <br/>
            <div id="77" class="hex">77</div>
            <div id="49" class="hex">49</div>
            <div id="27" class="hex">27</div>
            <div id="26" class="hex">26</div>
            <div id="25" class="hex">25</div>
            <div id="24" class="hex">24</div>
            <div id="43" class="hex">43</div>
            <div id="68" class="hex">68</div>
            <br/>
            <div id="76" class="hex">76</div>
            <div id="48" class="hex">48</div>
            <div id="47" class="hex">47</div>
            <div id="46" class="hex">46</div>
            <div id="45" class="hex">45</div>
            <div id="44" class="hex">44</div>
            <div id="69" class="hex">69</div>
            <br/>
            <div id="75" class="hex">75</div>
            <div id="74" class="hex">74</div>
            <div id="73" class="hex">73</div>
            <div id="72" class="hex">72</div>
            <div id="71" class="hex">71</div>
            <div id="70" class="hex">70</div>

            <div id="player-button" class="player-button main-button">
                <p onClick={() => <Player />}>PLAYER</p>
            </div>
            <div id="enemies-button" class="enemies-button main-button">
                ENEMIES
            </div>
            <div id="merchant-button" class="merchant-button main-button">
                MERCHANT
            </div>
        </div>
    );
  }