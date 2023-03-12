<script lang="ts">
    import InitiativeLine from "./lib/InitiativeLine.svelte";
    import { initiative_store } from "./lib/stores";

    import type { InitiativeLineModel } from "./lib/models";
    import InitiativeLineNew from "./lib/InitiativeLineNew.svelte";

    $: initiative_list = initiative_store;

    const test_data = {
        char_name: "nameasdf",
        initiative: 12,
        current_hp: 113,
        max_hp: 123,
    };

    const addToArraySorted = (data) => {
        $initiative_store = [...$initiative_store, data];
        $initiative_store.sort((a, b) => b.initiative - a.initiative);
    };

    const removeFromArray = (item) => {
        $initiative_store = $initiative_store.filter((i) => i !== item);
    };

    function handle_request_delete(event: CustomEvent<InitiativeLineModel>) {
        removeFromArray(event.detail);
    }

    function handle_request_create(event: CustomEvent<InitiativeLineModel>) {
        addToArraySorted(event.detail);
    }

    setInterval(() => console.log($initiative_list), 1000);
</script>

<main class="container">

    <div class="container text-center">
        <h1>Welcome to my little initiative tracker!</h1>
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col">Name</div>
                    <div class="col">Initiative</div>
                    <div class="col">Current HP</div>
                    <div class="col">Max HP</div>
                    <div class="col" />
                </div>
            </div>
            <ul class="list-group list-group-flush">
                {#each $initiative_list as line}
                    <li class="list-group-item">
                        <InitiativeLine
                            data={line}
                            on:delete_request={handle_request_delete}
                        />
                    </li>
                {/each}
            </ul>
            <div class="card-footer">
                <InitiativeLineNew on:create_request={handle_request_create} />
            </div>
        </div>
    </div>
</main>
