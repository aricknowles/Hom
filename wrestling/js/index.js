$(document).ready(function(){$(".disc").throwable({
                        containment:"parent",
    autostart:false,
    gravity:{x:0,y:-1},
    bounce:0.5,
    damping:100,
                    });
$(".disc2").throwable({
                        containment:"parent",
    autostart:false,
    gravity:{x:0,y:-1},
    bounce:0.5,
    collisionDetection: true,
    damping:100,
    areaDetection:[[0,0,300,300]],

                    });
$(".disc3").throwable({
                        containment:"parent",
    autostart:true,
    gravity:{x:0,y:1},
    bounce:0.5,
    collisionDetection: true,
    damping:100,
    areaDetection:[[0,0,300,300]],

                    }); });
