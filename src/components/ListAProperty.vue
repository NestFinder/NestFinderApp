<template>
    <div id="listAProperty" style="height: 100%">
        <!--<md-input-container class="listAPropertSearch">
            <md-icon class="customColor">search</md-icon>

            <input v-model=vm.searchPlace  v-gmaps-searchbox:location=vm>
        </md-input-container>
        <div>
            vm property :
            <br>
            <br>
            <br>
            <pre>{{ vm }}</pre>
        </div>-->
        <gmap-place-input
                class="customLabel"
                placeholder="find your property"
                :select-first-on-enter="true"
                @place_changed="updatePlace($event)"
        ></gmap-place-input>
        <div style="height: 90%">
            <gmap-map
                    :center="center"
                    :zoom="zoom"
                    :map-type-id="mapType"
                    :options="{scrollwheel: scrollwheel}"
                    @drag="drag++"
                    class="map-panel"
                    @place_changed="updatePlace($event)"
                    @center_changed="update('reportedCenter', $event)"
                    style="width: 100%; height: 100%;" >
                <!--<gmap-marker
                        :position="reportedCenter"
                        :clickable="true"
                        :draggable="false">
                </gmap-marker>-->
            </gmap-map>
            <div class="cmapMarker" id="static-img">
                <img src="../../assets/img/map_marker.png">
            </div>
            <div class="cSetButton">
                <md-button v-on:click.native="setLocation" type="button" class="md-raised setPropertyBtn"><md-icon class="md-icon">location_on</md-icon>Set Location</md-button>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        name: 'ListAProperty',
        data: function (router) {
            return {
                /*vm: {
                 searchPlace: '',
                 location: {}

                 }*/
                center: { lat: 12.979468, lng: 77.590771 },
                reportedCenter: { lat: 12.979468, lng: 77.590771 },
                zoom: 16,
                mapType: 'roadmap',
                drag: 0,
                markers: [],
                scrollwheel: false,
                plugins : {
                    'cordova-plugin-device': function () {
                        if (!Vue.cordova.device) {
                            console.log('FAILED : device information not found')
                        } else {
                            console.log('Device : ' + Vue.cordova.device.manufacturer + ' ' + Vue.cordova.device.platform + ' ' + Vue.cordova.device.version)
                        }
                    },
                    'cordova-plugin-geolocation': function () {
                        console.log("location method ");
                        console.log(this);
                        if (!Vue.cordova.geolocation) {
                            console.log('Vue.cordova.geolocation not found !');
                            return
                        }
                        Vue.cordova.geolocation.getCurrentPosition((position) => {
                            console.log('Current position : ' + position.coords.latitude + ',' + position.coords.longitude)
                        }, (error) => {
                            console.log('FAILED Error #' + error.code + ' ' + error.message)
                        }, {
                            timeout: 1000,
                            enableHighAccuracy: true
                        })
                    }
                }
            }
        },
        created : function () {
            console.log("created method called");
        },
        methods: {
            updatePlace(place) {
                if (place && place.geometry && place.geometry.location) {
                    this.reportedCenter = {
                        lat : place.geometry.location.lat(),
                        lng : place.geometry.location.lng()
                    };
                    this.center = _.clone(this.reportedCenter);
                }
            },
            update(field, event) {
                console.log("center changed");
                if (field === 'reportedCenter') {
                    // N.B. It is dangerous to update this.center
                    // Because the center reported by Google Maps is not exactly
                    // the same as the center you pass it.
                    // Instead we update this.center only when the input field is changed.

                    console.log('CENTER REPORTED', event);
                    this.reportedCenter = {
                        lat: event.lat(),
                        lng: event.lng(),
                    };

                    // If you wish to test the problem out for yourself, uncomment the following
                    // and see how your browser begins to hang:
                    // this.center = _.clone(this.reportedCenter)
                }
            },
            updateMarkerPos (event) {
                this.reportedCenter = {
                    lat: event.lat(),
                    lng: event.lng(),
                };
            },
            setLocation(){

                this.$router.push('/morepropertydetail');
            }
        },
        computed:{

            mapStyles () {
                console.log("map styles comuted method called");
                return [];
            }
        }

    }
</script>

<style>
    .listAPropertSearch {
        background-color: teal;
    }
    .customLabel > input {
        width: 100%;
        background-color: #595959;
        color: white;
        font-style: oblique;
        border-radius: 9px;
        min-height: 48px;
        height: 10%;
        text-align: center;
        font-size: 16px;
    }
    .cmapMarker{
        position:absolute;
        top:52%;
        width:100%;
        text-align:center;
    }
    .cSetButton {
        position:absolute;
        top:88%;
        width:100%;
        text-align:center;
    }
    .setPropertyBtn{
        background-color: #078eca !important;
        color: white !important;
    }
</style>