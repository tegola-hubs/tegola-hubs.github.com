#version 3.7;

#local n=880005;
#local s=764995;
#local w=109995;
#local e=205005;

#local hbias=10;
#local maxheight=1068.0+hbias;
#local hscale=2000;

#local tormor=<171124, 842971, (110+hbias)*hscale/maxheight>;
#local arnish=<159801, 847786, (110+hbias)*hscale/maxheight>;
#local portree=<146740, 842710, (305+hbias)*hscale/maxheight>;

global_settings {
    ambient_light 0.5
}

sky_sphere {
    pigment {
        gradient y
        color_map {
          [0.2 color <0.5, 0.75, 1>/2 ]
          [1 color <0, 0, 1>/2 ]
        }
        scale 2
        translate -1
    }
}

camera {
    sky <0,0,1>
    right <-1.33,0,0>
    location <135000,840000,7*hscale>
    look_at tormor
}

light_source {
    <(e),-(n),50*hscale>
    <0.1,0.1,0.1>
    fade_power 1
}

light_source { portree <1,0,0> } 
light_source {
    portree <0,1,0> spotlight
    point_at arnish
    tightness 0 radius 10 falloff 10
}

height_field {
    tga "elevation-full.tga"
    smooth 
    texture {
        pigment {
            image_map {
               png "basemap-full.png"
               interpolate 2
               once
           }
           rotate <90,0,0>
        }
        finish {
            diffuse  1.0
            specular 0.8
            metallic
        }
    }

    translate <-0.5,0,-0.5>
    rotate <90, 0, 180>
    scale <-1,1,1>
    translate <0.5,0.5,0>
    scale <(e-w),(n-s),hscale>
    translate <w,s,0>
}
