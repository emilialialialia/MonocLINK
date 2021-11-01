import React from 'react';
import { StyledLoremBG } from './Styles/StyledLoremBG';

const LoremBG = () => {
    const lorems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin aliquam ultrices sagittis orci a. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Egestas tellus rutrum tellus pellentesque. Sit amet aliquam id diam maecenas ultricies. Ut placerat orci nulla pellentesque dignissim enim. Massa tempor nec feugiat nisl pretium fusce. Adipiscing at in tellus integer feugiat scelerisque varius morbi. In pellentesque massa placerat duis. Sed faucibus turpis in eu mi bibendum. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo. Vel pretium lectus quam id leo in vitae. Et magnis dis parturient montes nascetur. Consectetur adipiscing elit pellentesque habitant morbi tristique. Vulputate dignissim suspendisse in est ante in. Platea dictumst vestibulum rhoncus est.",

    "Donec adipiscing tristique risus nec feugiat in fermentum. Amet consectetur adipiscing elit duis. Tellus in hac habitasse platea. Eu scelerisque felis imperdiet proin fermentum leo. Fusce id velit ut tortor. Felis imperdiet proin fermentum leo vel orci porta non. Consectetur lorem donec massa sapien faucibus et molestie. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Et netus et malesuada fames ac turpis egestas integer eget. Purus non enim praesent elementum facilisis leo vel fringilla est. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Amet luctus venenatis lectus magna fringilla urna. Enim neque volutpat ac tincidunt vitae semper quis. Vestibulum lectus mauris ultrices eros in cursus turpis. Diam vulputate ut pharetra sit. Sed turpis tincidunt id aliquet risus feugiat in. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Nunc faucibus a pellentesque sit amet porttitor eget dolor.",

    "Purus viverra accumsan in nisl nisi scelerisque. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Phasellus faucibus scelerisque eleifend donec pretium. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada fames ac turpis egestas maecenas pharetra convallis. Augue mauris augue neque gravida. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. In vitae turpis massa sed elementum tempus egestas sed. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Ut aliquam purus sit amet luctus venenatis lectus magna. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Tortor at auctor urna nunc id cursus metus. Rhoncus mattis rhoncus urna neque viverra. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Ut venenatis tellus in metus vulputate. Arcu dui vivamus arcu felis bibendum ut tristique et egestas.",
    
    "Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Et odio pellentesque diam volutpat. Vestibulum morbi blandit cursus risus at ultrices mi tempus. In ornare quam viverra orci. Purus in mollis nunc sed. Imperdiet proin fermentum leo vel orci. Diam sollicitudin tempor id eu. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Aliquam nulla facilisi cras fermentum odio eu. Velit euismod in pellentesque massa placerat duis. Enim blandit volutpat maecenas volutpat. Ac felis donec et odio. Lectus nulla at volutpat diam ut venenatis. Consectetur a erat nam at lectus. Amet justo donec enim diam vulputate ut pharetra sit amet. Tellus orci ac auctor augue. Tincidunt praesent semper feugiat nibh sed pulvinar.",
    
    "Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Et leo duis ut diam quam nulla. Ipsum consequat nisl vel pretium lectus quam. Lorem ipsum dolor sit amet consectetur. Sit amet luctus venenatis lectus magna fringilla. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Congue eu consequat ac felis donec et odio pellentesque. Arcu odio ut sem nulla pharetra diam sit amet nisl. Non sodales neque sodales ut. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Iaculis urna id volutpat lacus laoreet. Ultricies lacus sed turpis tincidunt id. Nec ultrices dui sapien eget. Dictum sit amet justo donec enim diam. Id nibh tortor id aliquet lectus. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Semper eget duis at tellus at urna condimentum mattis. Sed velit dignissim sodales ut eu sem. Nam aliquam sem et tortor consequat id porta nibh. Nunc id cursus metus aliquam."
    ];
    return(
        <div>
            <div>
                <StyledLoremBG>{lorems[Math.floor(Math.random() * (lorems.length+1))]}</StyledLoremBG>
            </div>
        </div>
       
    );
};

export default LoremBG;