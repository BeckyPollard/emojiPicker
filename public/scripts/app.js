const app = new Vue({
    el: '#app', //what element it connect to
    data: {
        search: "",
        headline: 'Emoji', //this will render in the {{healdine}}
        emoji: [
            //EMOTES
            {icon: "😀", search: "emote happy grin smile teeth :D"},
            {icon: "😁", search: "emote happy grin smile joy teeth closed"},
            {icon: "😂", search: "emote laugh tears joy lol funny haha"},
            {icon: "🤣", search: "emote laugh tears lol rofl roll haha xD"},
            {icon: "😃", search: "emote happy grin smile :D"},
            {icon: "😄", search: "emote happy grin smile joy"},
            {icon: "😅", search: "emote happy sweat nervous embarrassed"},
            {icon: "😆", search: "emote laugh lol squint haha xD"},
            {icon: "😉", search: "emote wink smile flirty ;)"},
            {icon: "😊", search: "emote happy grin joy closed cheeks rosy blush n_n"},
            {icon: "😋", search: "emote happy tongue stick cheeky savour yum :P"},
            {icon: "😎", search: "emote sunglasses shades eyes cool visor B)"},
            {icon: "😍", search: "emote love heart eyes flirty grin smile happy <3 adore"},
            {icon: "😘", search: "emote love heart flirty kiss smooch wink 3"},
            {icon: "😗", search: "emote love kiss lips pursed flirty 3 smooch"},
            {icon: "😙", search: "emote love kiss lips flirty smooch joy closed 3 "},
            {icon: "😚", search: "emote love kiss lips pursed flirty smooch blush 3"},
            {icon: "😊", search: "emote happy grin smile joy blush closed"},
            {icon: "🙂", search: "emote happy smile :)"},
            {icon: "🤗", search: "emote happy hug hands hold reach embrace"},
            {icon: "🤩", search: "emote happy starstruck awe wow fan"},
            {icon: "🤔", search: "emote thinking hmmmm wonder ponder thought"},
            {icon: "🤨", search: "emote eyebrow distruct what hmmmm raised doubt"},
            {icon: "😐", search: "emote neutral blank :| meh"},
            {icon: "😑", search: "emote neutral blank sleep ugh ignore"},
            {icon: "😶", search: "emote neutral blank"},
            {icon: "🙄", search: "emote ugh eye roll doubt sigh"},
            {icon: "😏", search: "emote smile smirk flirty side eye"},
            {icon: "😣", search: "emote frown persevering squint stress mad ugh x("},
            {icon: "😥", search: "emote sweat frown sad anxiety anxious nervous worry"},
            {icon: "😮", search: "emote gasp mouth wow agape oh no :o"},
            {icon: "🤐", search: "emote mute zipped silent silence shut"},
            {icon: "😯", search: "emote gasp mouth wow agape oh no :o hushed"},
            {icon: "😪", search: "emote sleeping snot bubble zzz snooze asleep"},
            {icon: "😴", search: "emote sleeping zzz snooze asleep"},
            {icon: "😌", search: "emote sleeping zzz snooze asleep peaceful relieved smile"},
            {icon: "😛", search: "emote happy tongue stick cheeky :P"},
            {icon: "😜", search: "emote happy tongue stick cheeky ;P haha wink flirty"},
            {icon: "😝", search: "emote laugh tongue stick cheeky xP haha squint"},
            {icon: "🤤", search: "emote smile drool awe oh want lust"},
            {icon: "😒", search: "emote frown unamused meh side eye glare sulk"},
            {icon: "😓", search: "emote sweat frown sad anxiety anxious nervous worry down"},
            {icon: "😔", search: "emote frown down sad defeat pensive depressed"},
            {icon: "😕", search: "emote frown neutral half welp hmmm confused"},
            {icon: "🙃", search: "emote upsidedown oh fuck mistake ah welp shit panic"},
            {icon: "🤑", search: "emote awe eye money rich greed wealth"},
            {icon: "😲", search: "emote gasp mouth wow agape oh no :o astonished whoa yikes"},
            {icon: "🙁", search: "emote frown sad down :("},
            {icon: "😖", search: "emote sad stressed anguished upset squint x( confounded"},
            {icon: "😞", search: "emote frown sad down disappointed defeat"},
            {icon: "😟", search: "emote frown sad worried concerned"},
            {icon: "😤", search: "emote mad angry steam ticked bothered"},
            {icon: "😢", search: "emote frown sad tear crying depressed"},
            {icon: "😭", search: "emote frown sad tear crying sobbing lous wail mourn"},
            {icon: "😦", search: "emote frown gasp agape wow oh no astonished whoa yikes"},
            {icon: "😧", search: "emote frown gasp agape wow oh no astonished whoa yikes anguished"},
            {icon: "😨", search: "emote frown fear scared fright terror afraid spook yikes"},
            {icon: "😩", search: "emote frown sad weary tired yawn sigh yield done"},
            {icon: "🤯", search: "emote stress head explode anxious mind blown whoa bang boom"},
            {icon: "😬", search: "emote neutral grin grimace teeth yikes embarrassed"},
            {icon: "😰", search: "emote sweat anxious anxiety stress fearful scared timid worry"},
            {icon: "😱", search: "emote fear scared fright terror afraid spook yikes scream yell shout"},
            {icon: "😳", search: "emote wide eye blush flushed yikes embarrassed"},
            {icon: "🤪", search: "emote crazy zany nuts amped high wild unhinged stressed"},
            {icon: "😵", search: "emote dizzy spiral overwhelmed ko knockout"},
            {icon: "😡", search: "emote angry anger mad furious frown >:( grrr pout fury rage"},
            {icon: "🤬", search: "emote angry anger mad furious frown >:( grrr pout fury rage swear yell"},
            {icon: "😠", search: "emote angry anger mad frown >:( grrr pout"},
            {icon: "😷", search: "emote mask medical face cover sick"},
            {icon: "🤒", search: "emote frown sick thermometer ill unwell medical"},
            {icon: "🤧", search: "emote sick sneeze achoo tissue kleenex ill unwell medical"},
            {icon: "🤢", search: "emote frown sick puke hurl barf throwup vomit spew ill unwell medical"},
            {icon: "🤮", search: "emote sick puke hurl barf throwup vomit spew ill unwell medical"},
            {icon: "🤕", search: "emote frown injured hurt bandage medical unwell sick ill"},
            {icon: "😇", search: "emote dead angel halo angelic pure good"},
            {icon: "🤠", search: "emote cowboy cowpoke cowgirl yeeha ranch west hat"},
            {icon: "🤥", search: "emote frown nose lying lie pinochio"},
            {icon: "🤫", search: "emote shush shh quiet mute"},
            {icon: "🤭", search: "emote hand cover giggle teehee shy smile"},
            {icon: "🧐", search: "emote monocle old antique rich money"},
            {icon: "🤓", search: "emote nerd glasses dork teeth dweeb square"},
            {icon: "😈", search: "emote devil horns oni smile grin evil malicious bad"},
            {icon: "👿", search: "emote devil horns oni frown mad angry evil malicious bad"},
            {icon: "🤡", search: "emote clown evil"},
            {icon: "💀", search: "emote skull skeleton dead rip bones"},
            {icon: "☠", search: "emote skull skeleton dead rip bones crossed"},
            {icon: "💩", search: "emote poop poo shit stink crap"},
            //CREATURES
            {icon: "👹", search: "creature japanese ogre devil mask"},
            {icon: "👺", search: "creature goblin nose long mask japanese"},
            {icon: "👻", search: "creature ghost spirit cheeky tongue spooky bleh boo silly"},
            {icon: "👽", search: "creature alien ufo lgm space"},
            {icon: "👾", search: "creature alien ufo lgm space"},
            {icon: "🤖", search: "creature robot cyborg computer machine"},
            //CATS
            {icon: "😺", search: "cat smile grin happy positive"},
            {icon: "😸", search: "cat smile grin happy positive joy laugh"},
            {icon: "😹", search: "cat tears laugh smile grin joy"},
            {icon: "😻", search: "cat love heart eyes flirty grin smile happy <3 adore"},
            {icon: "😼", search: "cat determined smirk plot devious"},
            {icon: "😽", search: "cat love kiss lips pursed flirty 3 smooch"},
            {icon: "🙀", search: "cat fear scared fright terror afraid spook yikes scream yell shout"},
            {icon: "😿", search: "cat sad frown tear crying depressed"},
            {icon: "😾", search: "cat mad angry pout growl upset"},
            //MONKEYS TEMP
            {icon: "🙈", search: "monkey see no evil cover eye blind"},
            {icon: "🙉", search: "monkey hear no evil cover ears deaf silent"},
            {icon: "🙊", search: "monkey speak no evil mute quiet silent"},
            //HUMANS
            {icon: "_", search: "_"},
            {icon: "_", search: "_"},
        ],
        sort_modifier: 1
    },
    computed: {
        filtered_emoji(){
            return this.emoji
                .filter(f => f.search.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
                .sort((a, b)=>{
                    if (a.search > b.search) return this.sort_modifier;
                    if (a.search < b.search) return -1 * this.sort_modifier;
                    return 0;
                })
        }
    },
    methods: {
        sortEmote() {
            data.search = "emote"
        }
    }
})

//TODO
//click emote category button
//set search to "emote"
//display emotes
//
//add copy-to-clipboard functionality